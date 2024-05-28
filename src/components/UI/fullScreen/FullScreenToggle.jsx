import React from 'react';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';

class FullScreenToggle extends React.Component {
    handleFullScreen = () => {
        const element = document.documentElement;

        if (!document.fullscreenElement) {
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.mozRequestFullScreen) { // Firefox
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullscreen) { // Chrome, Safari and Opera
                element.webkitRequestFullscreen();
            } else if (element.msRequestFullscreen) { // IE/Edge
                element.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) { // Firefox
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { // IE/Edge
                document.msExitFullscreen();
            }
        }
    };

    render() {
        return (
            <div className="items" onClick={this.handleFullScreen}>
                <FullscreenExitOutlinedIcon className="icon" style={{ cursor: 'pointer' }} />
            </div>
        );
    }
}

export default FullScreenToggle;
