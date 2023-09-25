export default function getDeviceType() {
    let device;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        device = 'mobile';
    } else {
        device = 'desktop';
    }
    return device;
}