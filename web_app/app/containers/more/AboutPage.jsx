import axios from 'axios';
import BallotReturnNavigation from "components/base/BallotReturnNavigation";
import BottomContinueNavigation from "components/base/BottomContinueNavigation";
import OrganizationsToFollowList from "components/base/OrganizationsToFollowList";
import React from "react";
import { Button, ButtonToolbar } from "react-bootstrap";
import { Link } from "react-router";
import UnfollowAction from "components/base/UnfollowAction";

{/* VISUAL DESIGN HERE:  */}

export default class AboutPage extends React.Component {
	constructor(props) {
		super(props);
	}

	static getProps() {
		return {};
	}

	render() {
	    return (
<div>
	<BallotReturnNavigation back_to_ballot={false} link_route={'more'} />
	<div className="container-fluid well well-90">
		<h2 className="text-center">About We Vote</h2>

        <ul className="list-group">
          <li className="list-group-item">
            <UnfollowAction />
            <Link to="org_endorsements" params={{org_id: 27}}>
                <span className="glyphicon glyphicon-small glyphicon-tower"></span>&nbsp;Organization Name<br />{/* TODO icon-org-placeholder */}
                    <span className="small">
                        @OrgName1 (read more)
                    </span>
            </Link>
          </li>
          <li className="list-group-item">
            <UnfollowAction />
              <Link to="org_endorsements" params={{org_id: 27}}>
                <span className="glyphicon glyphicon-small glyphicon-tower"></span>&nbsp;Another Organization<br />{/* TODO icon-org-placeholder */}
                    <span className="small">
                        @OrgName2 (read more)
                    </span>
              </Link>
          </li>
        </ul>
    </div>
</div>
		);
	}
}
