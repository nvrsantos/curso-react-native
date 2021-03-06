import React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import styles from './style'

import Bomb from '../Bomb'
import Flag from '../Flag'

export default props => {
    const { mined, opened, nearMines, exploded, flagged } = props

    const styleField = [styles.field]
    if (opened) styleField.push(styles.opened)
    if (exploded) styleField.push(styles.exploded)
    if (flagged) styleField.push(styles.flagged)
    if (!opened && !exploded) styleField.push(styles.regular)

    let color = null
    if (nearMines > 0) {
        if (nearMines == 1) color = '#2B520F'
        if (nearMines == 2) color = '#2A28D7'
        if (nearMines > 2 && nearMines < 6) color = '#F221A9'
        if (nearMines >= 6) color = '#F9060A'
    }

    return (
        <TouchableWithoutFeedback onPress={props.onOpen} onLongPress={props.onFlag}>
            <View style={styleField}>
                {!mined && opened && nearMines > 0 ?
                    <Text style={[styles.label, { color: color }]}>{nearMines}</Text>
                : false}
                {mined && opened ? <Bomb /> : false}
                {!opened && flagged ? <Flag /> : false}
            </View>
        </TouchableWithoutFeedback>
    )
}