import axios from 'axios';
const apiAsides = window.location.origin+'/aside';
const apiIntros = window.location.origin+'/introduce';
const apiWorks = window.location.origin+'/working';
const apiSkills = window.location.origin+'/skill';
const apiFeedBacks = window.location.origin+'/feedback';
const apiCareers = window.location.origin+'/career';
const apiChooses = window.location.origin+'/choose';
const apiInfos = window.location.origin+'/info';
const apiDialogs = window.location.origin+'/career/dialog';
import * as Type from './types'
export const apiHeader = () =>{
    return(dispatch) =>{
        axios.get(apiAsides)
        .then(res => {
            dispatch(
                {
                    type: Type.DATA_ASIDE, 
                    payload: {
                        data:res.data
                    }
                }
            )
        })
      }
}
export const apiIntro = () =>{
    return (dispatch) =>{
        axios.get(apiIntros)
        .then(res => {
            dispatch(
                {
                    type: Type.DATA_INTRO, 
                    payload: {
                        data:res.data
                    }
                }
            )
        })
      }
}
export const apiWork = () =>{
    return(dispatch) =>{
        axios.get(apiWorks)
        .then(res => {
            dispatch(
                {
                    type: Type.DATA_WORK, 
                    payload: {
                        data:res.data
                    }
                }
            )
        })
      }
}
export const apiSkill = () =>{
    return(dispatch) =>{
        axios.get(apiSkills)
        .then(res => {
            dispatch(
                {
                    type: Type.DATA_SKILL, 
                    payload: {
                        data:res.data
                    }
                }
            )
        })
      }
}
export const apiFeedBack = () =>{
    return(dispatch) =>{
        axios.get(apiFeedBacks)
        .then(res => {
            dispatch(
                {
                    type: Type.DATA_FEED, 
                    payload: {
                        data:res.data
                    }
                }
            )
        })
      }
}
export const apiCareer = () =>{
    return(dispatch) =>{
        axios.get(apiCareers)
        .then(res => {
            dispatch(
                {
                    type: Type.DATA_CAREER, 
                    payload: {
                        data:res.data
                    }
                },
            )
        })
      }
}
export const clickCareer = (id) => {
    return {
        type:Type.CLICK_DIALOG,
        payload:{
            id:id,
        }
    }
}
export const closeModal = () => {
    return {
        type:Type.CLOSE_DIALOG,
        payload:{
            id:{},
            data:{}
        }
    }
}
export const apiChoose = () =>{
    return(dispatch) =>{
        axios.get(apiChooses)
        .then(res => {
            dispatch(
                {
                    type: Type.DATA_CHOOSE, 
                    payload: {
                        data:res.data,
                    },
                },
            )
        })
      }
}
export const clickChoose = (id) =>{
    return {
        type:Type.CLICK_CHOOSE,
        payload:{
            id:id
        }
    }
}
export const apiInfo = () =>{
    return(dispatch) =>{
        axios.get(apiInfos)
        .then(res => {
            dispatch(
                {
                    type: Type.DATA_INFO, 
                    payload: {
                        data:res.data
                    }
                }
            )
        })
      }
}
export const apiDialog = () =>{
    return(dispatch) =>{
        axios.get(apiDialogs)
        .then(res => {
            dispatch(
                {
                    type: Type.DATA_DIALOG, 
                    payload: {
                        data:res.data
                    }
                }
            )
        })
      }
}


