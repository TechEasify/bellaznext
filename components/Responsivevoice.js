import React, { useEffect, useRef, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import PauseCircleFilledIcon from "@mui/icons-material/PauseCircleFilled";
import axios from "axios";
import BeyondWords from '@beyondwords/player';

// export async function getStaticProps() {
//   const res = await fetch('https://https://bellaznews.netlify.app/wp-json/wp/v2/posts');
//   const posts = await res.json();

//   console.log(posts, "posts");

//   // Assuming your TTS data is in the 'beyondwords_tts' field of each post
//   const postsWithTTS = posts.map(post => ({
//     ...post,
//     tts: post.beyondwords_tts
//   }));

//   return {
//     props: {
//       posts: postsWithTTS,
//     },
//   };
// }

function Responsivevoice({ nodeByUri, post }) {
  console.log(nodeByUri, "nodeByUri");
  //   const [playing, setPlaying] = useState(false);

  //   useEffect(() => {
  //     responsiveVoice.init();
  //   }, []);

  //   const togglePlay = () => {
  //     setPlaying(!playing);
  //     if (!playing) {
  //       responsiveVoice.setDefaultVoice("US English Female");
  //       responsiveVoice.speak(nodeByUri.content);
  //     } else {
  //       responsiveVoice.cancel();
  //     }
  //   };
  // const [isPlaying, setIsPlaying] = useState(false);
  // const [currentTime, setCurrentTime] = useState(0);
  // const [duration, setDuration] = useState(0);
  // const audioRef = useRef(null);
  const playerRef = useRef(null);

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src =
  //     "https://proxy.beyondwords.io/npm/@beyondwords/player@latest/dist/umd.js";
  //   script.async = true;
  //   script.defer = true;
  //   script.onload = () => {
  //     new BeyondWords.Player({
  //       target: document.getElementById("beyondwords-player"),
  //       projectId: 45037,
  //       clientSideEnabled: true,
  //     });
  //   };
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  // useEffect(() => {
  //   const audio = audioRef.current;
  //   const updateCurrentTime = () => {
  //       setCurrentTime(audio.currentTime);
  //   };

  //   const setAudioData = () => {
  //     setDuration(audio.duration);
  //   };

  //   if (audio) {
  //     audio.addEventListener('timeupdate', updateCurrentTime);
  //     audio.addEventListener('loadedmetadata', setAudioData); // Use loadedmetadata instead of loadeddata

  //     return () => {
  //       audio.removeEventListener('timeupdate', updateCurrentTime);
  //       audio.removeEventListener('loadedmetadata', setAudioData);
  //     };
  //   }
  // }, [nodeByUri.content]);

  // const togglePlayPause = () => {
  //   const audio = audioRef.current;
  //   if (isPlaying) {
  //     audio.pause();
  //     // Cancel speech if already playing
  //     if (typeof responsiveVoice !== 'undefined') {
  //       responsiveVoice.cancel();
  //     }
  //   } else {
  //     audio.play();
  //     // Speak text if not playing
  //     if (typeof responsiveVoice !== 'undefined') {
  //       responsiveVoice.speak(nodeByUri?.content);
  //     }
  //   }
  //   setIsPlaying(!isPlaying);
  // };

  // const formatTime = (time) => {
  //   if (isNaN(time)) {
  //     return '0:00';
  //   }
  //   const minutes = Math.floor(time / 60);
  //   const seconds = Math.floor(time % 60);
  //   return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  // };

  //   const [isPlaying, setIsPlaying] = useState(false);
  //   const [currentTime, setCurrentTime] = useState(0);
  //   const [duration, setDuration] = useState(0);
  //   const audioRef = useRef(null);

  //   useEffect(() => {
  //     const audio = audioRef.current;
  //     const handleTimeUpdate = () => {
  //       setCurrentTime(audio.currentTime);
  //       setDuration(audio.duration);
  //     };

  //     audio.addEventListener("timeupdate", handleTimeUpdate);
  //     return () => {
  //       audio.removeEventListener("timeupdate", handleTimeUpdate);
  //     };
  //   }, []);

  //   const togglePlayPause = async () => {
  //     if (isPlaying) {
  //       audioRef.current.pause();
  //     } else {
  //       if (audioRef.current.src === nodeByUri.content) {
  //         audioRef.current.play();
  //       } else {
  //         await convertTextToSpeechAndPlay(nodeByUri.content);
  //       }
  //     }
  //     setIsPlaying(!isPlaying);
  //   };

  //   const convertTextToSpeechAndPlay = async (text) => {
  //     try {
  //       const audioUrl = await convertTextToSpeech(text);
  //       audioRef.current.src = audioUrl;
  //       audioRef.current.play();
  //       setIsPlaying(true);
  //     } catch (error) {
  //       console.error("Error converting text to speech:", error);
  //     }
  //   };

  //   const auth = "0b0703dd99b440d0a9bfbd59ccede20b";
  //   const userId = "Mf8LBj6z33U0jypWtRGF4dq093b2";
  //   const convertTextToSpeech = async (text) => {
  //     try {
  //       const response = await fetch("https://api.play.ht/api/v2/tts", {
  //         method: "POST",
  //         headers: {
  //           Accept: "application/json",
  //           "Access-Control-Allow-Headers": "Content-Type",
  //           "content-type": "application/json",
  //           "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH",
  //           Authorization: `Bearer ${auth}`,
  //           "X-USER-ID": userId,
  //         },
  //         mode: "no-cors",
  //         body: JSON.stringify({
  //           text: "Hello from a realistic voice.",
  //           voice:
  //             "s3://voice-cloning-zero-shot/d9ff78ba-d016-47f6-b0ef-dd630f59414e/female-cs/manifest.json",
  //           output_format: "mp3",
  //           voice_engine: "PlayHT2.0",
  //         }),
  //       });
  //       const result = await response.json();
  //     //   console.log(response, "response response");
  //       console.log(result, "result");
  //       return result.audioUrl; // Adjust this according to the actual response structure
  //     } catch (error) {
  //       console.error("Error converting text to speech:", error);
  //       throw error;
  //     }
  //   };

  //   const formatTime = (time) => {
  //     // Format time in seconds to 'MM:SS' format
  //     const minutes = Math.floor(time / 60);
  //     const seconds = Math.floor(time % 60);
  //     return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  //   };

  useEffect(() => {
    if (window.BeyondWords) {
      new window.BeyondWords.Player({
        target: playerRef.current,
        projectId: 45037,
        contentId: nodeByUri.beyondwords.contentId,
      });
    }
  }, [nodeByUri.beyondwords.contentId]);

  return (
    // <>
    //   <svg className="hidden">
    //     <symbol id="backward" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    //       <path d="M8 5L5 8M5 8L8 11M5 8H13.5C16.5376 8 19 10.4624 19 13.5C19 15.4826 18.148 17.2202 17 18.188"></path>
    //       <path d="M5 15V19"></path>
    //       <path d="M8 18V16C8 15.4477 8.44772 15 9 15H10C10.5523 15 11 15.4477 11 16V18C11 18.5523 10.5523 19 10 19H9C8.44772 19 8 18.5523 8 18Z"></path>
    //     </symbol>
    //     <symbol id="play" viewBox="0 0 24 24">
    //       <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
    //     </symbol>
    //     <symbol id="pause" viewBox="0 0 24 24">
    //       <path fillRule="evenodd" d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" clipRule="evenodd" />
    //     </symbol>
    //     <symbol id="forward" viewBox="0 0 24 24">
    //       <path d="M16 5L19 8M19 8L16 11M19 8H10.5C7.46243 8 5 10.4624 5 13.5C5 15.4826 5.85204 17.2202 7 18.188" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    //       <path d="M13 15V19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    //       <path d="M16 18V16C16 15.4477 16.4477 15 17 15H18C18.5523 15 19 15.4477 19 16V18C19 18.5523 18.5523 19 18 19H17C16.4477 19 16 18.5523 16 18Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    //     </symbol>
    //     <symbol id="high" viewBox="0 0 24 24">
    //       <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z"></path>
    //       <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z"></path>
    //     </symbol>
    //     <symbol id="off" viewBox="0 0 24 24">
    //       <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM17.78 9.22a.75.75 0 10-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 001.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L20.56 12l1.72-1.72a.75.75 0 00-1.06-1.06l-1.72 1.72-1.72-1.72z"></path>
    //     </symbol>
    //   </svg>

    //   <media-controller audio>
    //     <audio slot="media" src={nodeByUri.content} crossOrigin="anonymous"></audio>
    //     <media-control-bar style={{ width: "100%" }}>
    //       <media-seek-backward-button>
    //         <svg slot="icon" aria-hidden="true" className="w-7 h-7 fill-none stroke-white">
    //           <use href="#backward" />
    //         </svg>
    //       </media-seek-backward-button>
    //       <media-play-button onClick={togglePlay}>
    //         {playing ? (
    //           <svg slot="pause" aria-hidden="true" className="w-7 h-7">
    //             <use href="#pause" />
    //           </svg>
    //         ) : (
    //           <svg slot="play" aria-hidden="true" className="w-7 h-7">
    //             <use href="#play" />
    //           </svg>
    //         )}
    //       </media-play-button>
    //       <media-seek-forward-button>
    //         <svg slot="icon" aria-hidden="true" className="w-7 h-7 fill-none stroke-white">
    //           <use href="#forward" />
    //         </svg>
    //       </media-seek-forward-button>
    //       <media-time-display></media-time-display>
    //       <media-time-range></media-time-range>
    //       <media-duration-display></media-duration-display>
    //       <media-mute-button>
    //         <svg slot="high" aria-hidden="true" className="h-5 w-5 fill-white stroke-white">
    //           <use href="#high" />
    //         </svg>
    //         <svg slot="medium" aria-hidden="true" className="h-5 w-5 fill-white stroke-white">
    //           <use href="#high" />
    //         </svg>
    //         <svg slot="low" aria-hidden="true" className="h-5 w-5 fill-white stroke-white">
    //           <use href="#high" />
    //         </svg>
    //         <svg slot="off" aria-hidden="true" className="h-5 w-5 fill-white stroke-white">
    //           <use href="#off" />
    //         </svg>
    //       </media-mute-button>
    //     </media-control-bar>
    //   </media-controller>
    // </>
    <>
      <div>
        {/* {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            <AudioPlayer
              autoPlay={false}
              src={post.tts.audio_url}
              onPlay={(e) => console.log("onPlay")}
              // other props here
            />
          </div>
        ))} */}
        <div ref={playerRef}></div>
      </div>
      {/* <div className="flex flex-col items-center p-4 bg-gray-800 text-white rounded-lg shadow-lg">
        <audio ref={audioRef} src={nodeByUri.content}></audio>
        <div className="flex items-center space-x-4">
          <button
            onClick={togglePlayPause}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {isPlaying ? (
              <PauseCircleFilledIcon />
            ) : (
              <PlayCircleFilledWhiteIcon />
            )}
          </button>
          <div className="flex items-center">
            <span>{formatTime(currentTime)}</span>
            <div className="relative w-64 h-2 bg-gray-600 rounded mx-2">
              <div
                className="absolute left-0 top-0 h-full bg-blue-500 rounded"
                style={{ width: `${(currentTime / duration) * 100}%` }}
              ></div>
            </div>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div> */}

      {/* <div className="flex flex-col items-center p-4 bg-gray-800 text-white rounded-lg shadow-lg">
        <audio ref={audioRef}></audio>
        <div className="flex items-center space-x-4">
          <button
            onClick={togglePlayPause}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {isPlaying ? (
              <PauseCircleFilledIcon />
            ) : (
              <PlayCircleFilledWhiteIcon />
            )}
          </button>
          <div className="flex items-center">
            <span>{formatTime(currentTime)}</span>
            <div className="relative w-64 h-2 bg-gray-600 rounded mx-2">
              <div
                className="absolute left-0 top-0 h-full bg-blue-500 rounded"
                style={{ width: `${(currentTime / duration) * 100}%` }}
              ></div>
            </div>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Responsivevoice;
