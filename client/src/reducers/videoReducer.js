import {GET_VIDEOS} from '../actions/types'


const initialState = {
    videos: [
        {
          title: "Minecraft Video",
          views: 201,
          uploadDate: "2019-06-05",
          image:
            "https://i.ytimg.com/vi/VGt-BZ-SxGI/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDYi5is1V53znU-_eZeTa8tuiuuWg",
          duration: 210,
          channel:{
            name: "PewDiePie",
            image: "",
          }
        },
        {
          title: "Epic Minecraft",
          views: 1,
          uploadDate: "2019-06-05",
          image:
            "https://i.ytimg.com/vi/VGt-BZ-SxGI/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDYi5is1V53znU-_eZeTa8tuiuuWg",
          duration: 21,
          channel:{
            name: "PewDiePie",
            image: "",
          }
        },
        {
          title: "Minecraft letsplay",
          views: 201,
          uploadDate: "2019-06-05",
          image:
            "https://i.ytimg.com/vi/VGt-BZ-SxGI/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDYi5is1V53znU-_eZeTa8tuiuuWg",
          duration: 210,
          channel:{
            name: "PewDiePie",
            image: "",
          }
        },
        {
          title: "Minecraft Video",
          views: 201,
          uploadDate: "2019-06-05",
          image:
            "https://i.ytimg.com/vi/VGt-BZ-SxGI/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDYi5is1V53znU-_eZeTa8tuiuuWg",
          duration: 210,
          channel:{
            name: "PewDiePie",
            image: "",
          }
        },
        {
          title: "Minecraft Video",
          views: 201,
          uploadDate: "2019-06-05",
          image:
            "https://i.ytimg.com/vi/VGt-BZ-SxGI/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDYi5is1V53znU-_eZeTa8tuiuuWg",
          duration: 210,
          channel:{
            name: "PewDiePie",
            image: "",
          }
        },
        {
          title: "Minecraft Video",
          views: 201,
          uploadDate: "2019-06-05",
          image:
            "https://i.ytimg.com/vi/VGt-BZ-SxGI/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDYi5is1V53znU-_eZeTa8tuiuuWg",
          duration: 210,
          channel:{
            name: "PewDiePie with jackadadasda",
            image: "",
          }
        },
        {
          title: "Minecraft Video",
          views: 201,
          uploadDate: "2019-06-05",
          image:
            "https://i.ytimg.com/vi/VGt-BZ-SxGI/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDYi5is1V53znU-_eZeTa8tuiuuWg",
          duration: 210,
          channel:{
            name: "PewDiePie",
            image: "",
          }
        }
      ]
}


export default function(state = initialState, action){
    switch(action.type){
        case GET_VIDEOS:
            return {
                ...state
            }
        default:
            return state;
    }

}