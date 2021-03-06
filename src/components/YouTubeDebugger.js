import React from 'react';
 
class YoutubeDebugger extends React.Component {

    constructor(){
        super(); 

        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          }
    }

    bitrate = () => {
        this.setState({
            settings: {
              ...this.state.settings, 
              bitrate: 12
            }
        })
    }

    resolutionFix = () => {
      this.setState({
        settings: {
          ...this.state.settings, 
          video: {
          resolution: '720p'
          }
        }
      })
    }
 
  render() {
    return (
    <div>
      <button onClick={this.bitrate} className="bitrate" >{this.state.settings.bitrate}</button>
      <button onClick={this.resolutionFix} className="resolution" >{this.state.settings.video.resolution}</button>
      
    </div>
    );
  }
}
 
export default YoutubeDebugger;