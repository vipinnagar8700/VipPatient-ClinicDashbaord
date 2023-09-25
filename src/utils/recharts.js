// cartesian grid points generator
export const generateGridPoints = (id, gutter = 20) => {
    const gridWidth = document.getElementById(id).offsetWidth;

    let points = [];
    for (let i = 0; i < gridWidth; i += gutter) {
        points.push(i);
    }
    return points;
}