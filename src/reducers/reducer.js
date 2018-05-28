import * as Type from '../actions/types'
const INITIAL_STATE = {
    data:[],
    active:{},
    aside:{data: []},
    intro:{data: []},
    work:{data: []},
    skill:{data: []},
    feed:{data: []},
    career:{data: []},
    choose:{data: []},
    info:{data: []},
    dialog:{dataDialog: []},
    visible : "",
    options: {
        items: 4,
        loop:true,
        margin:10,
        nav:true,
        navText: ["&#10094;","&#10095;"],
        dots: true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        },
    },
    timeoutId: null,
    show: true,
    nameDialog:{},
    idDialog:{}
}
export default function (state = INITIAL_STATE,action){
    switch(action.type){
        case Type.DATA_ASIDE:
            return {
                ...state,
                aside:{
                    data: action.payload.data
                },  
            }
        case Type.DATA_INTRO:
            return {
                ...state,
                intro:{
                    data: action.payload.data
                }
                
            }
        case Type.DATA_WORK:
            return {
                ...state,
                work:{
                    data: action.payload.data
                }
            }
        case Type.DATA_SKILL:
            return {
                ...state,
                skill:{
                    data: action.payload.data
                }
            }
        case Type.DATA_FEED:
            return {
                ...state,
                feed:{
                    data: action.payload.data
                }            
            }
        case Type.DATA_CAREER:
            return {
                ...state,
                career:{
                    data:action.payload.data
                }            
            }
        case Type.DATA_CHOOSE:
            return {
                ...state,
                choose:{
                    data: action.payload.data,
                }            
            }
        case Type.CLICK_CHOOSE:
            return {
                ...state,
                active: action.payload.id === state.active ? null : action.payload.id
            }
        case Type.DATA_INFO:
            return {
                ...state,
                info:{
                    data: action.payload.data
                }            }
        case Type.DATA_DIALOG:
            return {
                ...state,
                dialog:{
                    dataDialog: action.payload.data,
                }            
            }
        case Type.CLICK_DIALOG:
            return {
                ...state,
                idDialog: action.payload.id,
            }
        case Type.CLOSE_DIALOG:
            return {
                ...state,
                idDialog:action.payload.id
            }
        default:
            return{
                ...state
            }
        }
    return state;
}
