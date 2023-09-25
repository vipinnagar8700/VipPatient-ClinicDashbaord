// styling
import styled from 'styled-components/macro';
import {colors, light, fonts, textSizes} from '@styles/vars';

// components
import WaveSurfer from 'wavesurfer.js';
import ShapeButton from '@ui/ShapeButton';

// hooks
import {useState, useEffect} from 'react';
import {useTheme} from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  height: 40px;
  gap: 10px;

  .wave {
    flex-grow: 1;
    min-width: 50px;
    max-width: 200px;
  }

  .duration {
    font-family: ${fonts.accent};
    font-size: ${textSizes['10']};
    min-width: 70px;
  }
`;

const Waveform = (props) => {
    const [state, setState] = useState({
        playing: false,
        progress: 0,
        duration: 0,
        src: props.src,
        id: props.id
    });
    const {theme} = useTheme();

    const [wave, setWave] = useState(null);

    function init() {
        const track = document.querySelector(`#track_${state.id}`);
        if (track) {
            const waveform = WaveSurfer.create({
                barWidth: 1,
                cursorWidth: 1,
                container: `#waveform_${props.id}`,
                backend: 'WebAudio',
                height: 33,
                barGap: 2,
                barRadius: 0.5,
                progressColor: colors.blue,
                responsive: true,
                waveColor: theme === 'dark' ? light.text : '#87BFFF',
                cursorColor: 'transparent',
            });
            setWave(waveform);
            waveform.load(track);
            waveform.on('ready', () => {
                setState({...state, duration: waveform.getDuration()});
            });
            waveform.on('audioprocess', () => {
                setState({...state, progress: waveform.getCurrentTime()});
            })
            waveform.on('finish', () => {
                setState({...state, playing: false, progress: 0});
                waveform.seekTo(0);
            })
        }
    }

    useEffect(() => {
        init();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (wave) {
            wave.setWaveColor(theme === 'dark' ? light.text : '#87BFFF');
        }
    }, [theme, wave]);

    const handlePlay = () => {
        setState({...state, playing: !state.playing});
        wave.playPause();
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time - minutes * 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    return (
        <Container className="audio">
            <ShapeButton shape="round" icon={!state.playing ? 'play' : 'pause'}
                         label={!state.playing ? 'Play voice message' : 'Pause voice message'}
                         handler={handlePlay}
            />
            <div className="wave" id={`waveform_${state.id}`}/>
            <audio id={`track_${state.id}`} src={props.src}/>
            <div className="duration">
                {formatTime(state.progress)} / {formatTime(state.duration)}
            </div>
        </Container>
    );
}

export default Waveform;