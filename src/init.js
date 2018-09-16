export class Init {
  constructor(el, data) {
    let html = `
    <link rel="stylesheet" href="//at.alicdn.com/t/font_836948_8so67ueev32.css">
    <style>
      #player {
        background:#000;
        width: 800px;
        height: 450px;
        margin: 100px auto;
        position: relative;
      }
      #player video {
        width: 100%;
        height: 100%;
      }
      .panel {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
      }
      .wrap {
        height: 100%;
        width: 100%;
      }
      .panels .epicon {
        font-size: 80px
      }
      .controls {
        display: flex;
        align-items: center;
        width: 100%;
        height: 40px;
        position: relative;
        bottom: 50px;
        display: none
      }
      .wrap:hover #player{
        background:#fff
      }
      .control{
        padding-left: 15px
      }
      .progress-bar {
        flex: 1;
        width: 100%;
        position: relative;
        cursor: pointer;
      }
      .progress {
        height: 5px;
        background-color: rgba(255, 255, 255, 0.8);
      }
      .dot {
        padding: 20px;
        position: absolute;
        top: -18px;
        left: -18px;
      }
      .dot i {
        height: 13px;
        width: 13px;
        background: ${data.themeColor};
        position: absolute;
        border-radius: 50%;
        top: 50%;
        left:50%;
        transform:translate(-50%,-50%)
      }
      .current-progress {
        width: 0%;
        height: 100%;
        background: ${data.themeColor};
        position: absolute;
        top: 0;
      }
      .buffer {
        width: 0%;
        height: 100%;
        background: ${data.themeColor};
        opacity:.4;
        position: absolute;
        top: 0;
      }
      .time {
        text-align: center;
        font-size: 12px;
        color: #fff;
        padding-left: 15px;
      }
      .epicon:hover {
        color: #fff;
      }
      .epicon {
        color: rgba(255, 255, 255, 0.8);
        cursor: pointer;
        transition: 0.3s;
        font-size: 24px;
        padding-right: 15px
      }
      .ep-volume-down,.ep-volume-off {
        padding: 0
      }
      .loading {
        position: absolute;
        top: 50%;
        left: 50%;
        margin:-20px 0 0 -20px;
        width: 40px;
        height: 40px;
        border: 5px solid;
        border-color: rgba(255, 255, 255, 0.8) rgba(255, 255, 255, 0.8) transparent;
        border-radius: 50%;
        box-sizing: border-box;
        animation: loading 1s linear infinite;
      }
      @keyframes loading{
        0%{
          transform: rotate(0deg);
        }
        100%{
          transform: rotate(360deg);
        }  
      }
      @keyframes display{
        0%{
          opacity: 1;
        }
        100%{
          opacity: 0;
        }
      }
    </style>

    <video src="${data.src}" id="video"></video>
      <div class="panels">
        <div class="loading"></div>
        <i class="epicon ep-play panel" style="display:none;"></i>
      </div>
      <div class="controls">
        <div class="control">
          <i class="epicon ep-play switch"></i>
        </div>
        <div class="progress-bar">
          <div class="progress"></div>
          <div class="current-progress"></div>
          <div class="buffer"></div>
          <div class="dot">
            <i></i>
          </div>
        </div>
        <div class="time">
          <span class="current">00:00</span>
          /
          <span class="total">00:00</span>
        </div>
        <div class="control">
        <i class="epicon ep-volume-down volume"></i>
        </div> 
        <div class="control">
          <i class="epicon ep-full full"></i>
        </div>  
      </div>
    `
    el.innerHTML = html
  }
}
