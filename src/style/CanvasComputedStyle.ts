import CommonComputedStyle from './CommonComputedStyle'

function getCanvasComputedStyle(canvas) {
    const { height, width } = canvas.getBoundingClientRect();
    const style = Object.assign(CommonComputedStyle, {
        display: 'inline',
        position: 'static',
        inlineSize: `${width}px`,
        perspectiveOrigin: `${width / 2}px ${height / 2}px`,
        transformOrigin: `${width / 2}px ${height / 2}px`,
        webkitLogicalWidth: `${width}px`,
        webkitLogicalHeight: `${height}px`,
        width: `${width}px`,
        height: `${height}px`,
    });
    return style;
}

export default getCanvasComputedStyle;
