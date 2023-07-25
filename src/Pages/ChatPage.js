// import { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import SideDrawer from "../components/Authentication/miscellaneous/sideDrawer";
import ChatBox from "../components/ChatBox";
import MyChats from "../components/MyChats";
import { ChatState } from "../context/ChatProvider";

const ChatPage = () => {
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {user && <MyChats />}
        {user && <ChatBox />}
      </Box>
    </div>
  );
};

export default ChatPage;
