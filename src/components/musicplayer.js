import React from "react";
import { Box, IconButton, Slider, SliderTrack, SliderFilledTrack, SliderThumb , Image} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { VStack, HStack } from "@chakra-ui/layout";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeDown } from 'react-icons/fa';
import  '../style/musicplayer.css';

const songs = [

    {
        src: "https://firebasestorage.googleapis.com/v0/b/ichiropractic.appspot.com/o/jericho.mp3?alt=media&token=6daac507-a4ab-486a-bd5d-bcb450c88030",
        title: "Jericho",
        artist: "Iniko",
        cover : "https://firebasestorage.googleapis.com/v0/b/ichiropractic.appspot.com/o/music.png?alt=media&token=c5e5e2d6-a95b-45d9-bf10-8bc1c03aec6f"
    },
    {
        src: "https://firebasestorage.googleapis.com/v0/b/ichiropractic.appspot.com/o/hope%20the%20chainsmokers.mp3?alt=media&token=9699df2a-c178-46a5-835c-eef5ffe7df83",
        title: "Hope",
        artist: "The Chainsmokers",
        cover:"https://firebasestorage.googleapis.com/v0/b/ichiropractic.appspot.com/o/vinyl-record.png?alt=media&token=9a263aac-3367-4246-8f16-3676d55c723e"
    }
];
class AudioPlayer extends React.Component {
    constructor(props) {
        super(props);

        this.audio = React.createRef();
        this.state = {
            currentSong: this.getRandomSong(),
            progress: 0,
            isPlaying: false,
            isHovering: false,
        };
    }

    getRandomSong = () => {
        const randomIndex = Math.floor(Math.random() * songs.length);
        return songs[randomIndex];
    };

    handleNext = () => {
        this.setState({ currentSong: this.getRandomSong() });
    };

    handlePrevious = () => {
        this.setState({ currentSong: this.getRandomSong() });
    };

    handlePlay = () => {
        if (this.state.isPlaying) {
            this.audio.current.pause();
        } else {
            this.audio.current.play();
        }

        this.setState(prevState => ({ isPlaying: !prevState.isPlaying }));
    };

    handleProgressChange = (value) => {
        this.audio.current.currentTime = (value / 100) * this.audio.current.duration;
        this.setState({ progress: value });
    };

    handleMouseHover = () => {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState = (state) => {
        return {
            isHovering: !state.isHovering,
        };
    }

    componentDidMount() {
        this.audio.current.addEventListener('timeupdate', this.updateProgress);
        this.audio.current.addEventListener('durationchange', this.updateProgress);
    }

    componentWillUnmount() {
        this.audio.current.removeEventListener('timeupdate', this.updateProgress);
        this.audio.current.removeEventListener('durationchange', this.updateProgress);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.currentSong !== this.state.currentSong) {
            this.audio.current.load();
            if (this.state.isPlaying) {
                this.audio.current.play();
            }
        }
    }

    updateProgress = () => {
        this.setState({ progress: (this.audio.current.currentTime / this.audio.current.duration) * 100 || 0 });
    };

    render() {
        const { currentSong, isPlaying, progress, isHovering } = this.state;

        return (
            <HStack>
                <Box position="relative" width="70px" height="50px" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
<Image
    boxSize="50px"
    borderRadius="full"
    src={currentSong.cover}
    alt={currentSong.title}
    // zoom the image 1.5
    className={isPlaying ? "spin" : ""}
/>

                    {isHovering &&
                    <Box
                    transition={{ duration: 0.5 }
                    }
                    position="absolute" top="0" left="-150" right="0" bottom="0" display="flex" justifyContent="center" alignItems="center">
                        <HStack>
                            <IconButton
                                size="sm"
                                aria-label="Increase volume"
                                icon={<FaVolumeUp />}
                                colorScheme="teal"
                                onClick={() => {this.audio.current.volume = Math.min(this.audio.current.volume + 0.1, 1)}}
                            />
                            <IconButton
                                size="sm"
                                aria-label="Decrease volume"
                                icon={<FaVolumeDown />}
                                colorScheme="teal"
                                onClick={() => {this.audio.current.volume = Math.max(this.audio.current.volume - 0.1, 0)}}
                            />
                        </HStack>
                    </Box>}
                </Box>
                <VStack width="full">
                    <audio ref={this.audio} src={currentSong.src} />
                    <HStack>
                        <IconButton
                            size="sm"
                            aria-label="Previous song"
                            icon={<ChevronLeftIcon />}
                            colorScheme="teal"
                            onClick={this.handlePrevious}
                            _hover={{ bg: "teal.500", transform: "scale(1.1)" }}
                            transition="all 0.2s"

                        />
                        <IconButton
                            size="sm"
                            aria-label={isPlaying ? "Pause" : "Play"}
                            icon={isPlaying ? <FaPause /> : <FaPlay />}
                            colorScheme="teal"
                            onClick={this.handlePlay}
                            _hover={{ bg: "teal.500", transform: "scale(1.1)" }}
                            transition="all 0.2s"
                        />
                        <IconButton
                            size="sm"
                            aria-label="Next song"
                            icon={<ChevronRightIcon />}
                            colorScheme="teal"
                            onClick={this.handleNext}
                            _hover={{ bg: "teal.500", transform: "scale(1.1)" }}
                            transition="all 0.2s"
                        />
                    </HStack>
                    <Slider aria-label="slider-ex-1" value={progress} onChange={this.handleProgressChange} colorScheme="teal" width="90%">
                        <SliderTrack bg="red.200">
                            <SliderFilledTrack bg="teal.300" />
                        </SliderTrack>
                        <SliderThumb boxSize={1} bg="teal.300" />
                    </Slider>
                </VStack>
            </HStack>
        );
    }

}

export default AudioPlayer;