import { PixelRatio, StyleSheet } from "react-native";

let cache = null;

export default () => {
    const scale = PixelRatio.getFontScale();
    if ( cache && cache.scale === scale )
        return cache.styles;

    const styles = StyleSheet.create( {
        container: {
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row"
        },

        picker: {
            height: 160 * scale,
        },

        date: {
            width: 130 * scale,
        },

        hours: {
            width: 35 * scale,
        },

        minutes: {
            width: 35 * scale
        },

        gap: {
            marginLeft: 10 * scale,
        },

        AM: {
            width: 35 * scale
        }

    } );

    cache = {
        scale,
        styles
    };

    return styles;
}
