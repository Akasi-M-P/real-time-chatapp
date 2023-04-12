// import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from "react-chat-engine-advanced"


// const ChatsPage = (props) => {
//     const chatProps = useMultiChatLogic("2fcf94f6-df1a-44d2-8db8-8401413dc60a", props.user.username, props.user.secret);
//   return (
//     <div style={{height: "100vh"}}>
//         <MultiChatSocket {...chatProps} />
//         <MultiChatWindow {...chatProps}  style={{height: "100%"}}/>
//     </div>
//   )
// }
// export default ChatsPage


import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId="2fcf94f6-df1a-44d2-8db8-8401413dc60a"
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};

export default ChatsPage;