import React from "react";

export default class Test extends React.Component {
	componentDidMount() {
		this.props.onGetInvite();
	}

	render() {
		const { host, agenda } = this.props.invite;
		return (
			<div className="container">
				<div className="well">
					<h1>Meeting invite</h1>
				</div>
				<div className="bg-warning meeting-summary">
					<div className="row">
						<div className="col-sm-4 col-md-2">
							<b>Host:</b>
						</div>
						<div className="col-sm-8 col-md-10">{host}</div>
					</div>
					<div className="row">
						<div className="col-sm-4 col-md-2">
							<b>Agenda:</b>
						</div>
						<div className="col-sm-8 col-md-10">{agenda}</div>
					</div>
				</div>
			</div>
		);
	}
}
