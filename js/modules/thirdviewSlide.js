
import {downloadManager} from '../helpers/downloadManager.js';
import {animateSlide} from '../helpers/animateSlide.js';
export function thirdViewSlide(arrayFileAndExtension){
 document.getElementById("third-view").onclick = (e)=>{
   if(e.target !== e.currentTarget){
     const targetId = e.target.id;
     if(targetId === "download-image"){
       const downloadManager = downloadManager(arrayFileAndExtension);
             downloadManager.then((responseDownloadManager)=>{

             }).catch((error)=>{
               console.log(error);
             });
     }else if(targetId === "back-to-start"){
       animateSlide(document.getElementById('flex-box-contain'),'0%')
     }else{
       return false;
     }
   }
 };
}
