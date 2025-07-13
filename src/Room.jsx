import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
    const {roomId} = useParams();

    function randomID(len) {
        let result = '';
        if (result) return result;
        var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
          maxPos = chars.length,
          i;
        len = len || 5;
        for (i = 0; i < len; i++) {
          result += chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return result;
      }
      
    let myMeeting = async (element) => {
        const appId=953574696;
        const serverSecret="daafa34d63e31dad116b908c5a6c7f00";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appId, serverSecret, roomId,  randomID(5),  randomID(5) );
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            scenario: {
              mode: ZegoUIKitPrebuilt.LiveStreaming,
              
            },
            sharedLinks:[
                {
                    name:"Copy link",
                    url:`http://localhost:3000/room/${roomId}`
                }
            ]
          });
      };

  return (
    <div ref={myMeeting}>
    
    </div>
  )
}

export default Room
