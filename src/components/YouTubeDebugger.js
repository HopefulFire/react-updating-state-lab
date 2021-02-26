import React from "react"

export default class YouTubeDebugger extends React.Component {
	state = {
		errors: [],
		user: null,
		settings: {
			bitrate: 8,
			video: {
				resolution: "1080p"
			}
		}
	}

	handleBitrateClick = () => {
		this.setState((state) => {
			return {
				...state,
				settings: {
					bitrate: 12,
					video: state.settings.video
				}
			}
		})
	}

	handleResolutionClick = () => {
		this.setState((state) => {
			return {
				...state,
				settings: {
					bitrate: state.settings.bitrate,
					video: {
						resolution: "720p"
					}
				}
			}
		})
	}

	render() {
		return (
			<div>
				<button className="bitrate" onClick={this.handleBitrateClick}>
					Bitrate
				</button>

				<button className="resolution" onClick={this.handleResolutionClick}>
					Resolution
				</button>
			</div>
		)
	}
}