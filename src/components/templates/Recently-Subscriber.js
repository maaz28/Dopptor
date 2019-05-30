import React from "react";
import RecentData from "../../data/social/recently-subscribers.json";
import {Link} from 'react-router-dom'

export default function RecentSubscriber() {
  return (
    <div class="table-responsive">
      <table class="table table-hover">
        <thead>
          <tr>
            <th class="bold small color-2 alpha-5">User</th>
            <th class="bold small color-2 alpha-5">Network</th>
            <th class="bold small color-2 alpha-5">Date</th>
          </tr>
        </thead>
        <tbody>
          {RecentData.map(item => {
              console.log(item)
            return (
              <tr>
                <td data-title="User">
                  <div class="media align-items-center">
                    <img
                      src={item.user.picture}
                      class="icon-lg shadow mr-2 rounded-circle"
                      alt=""
                    />

                    <div class="media-body">
                      <p class="regular text-overflow text-capitalize my-0">
                        {item.user.name}
                      </p>
                      <Link
                        class="small text-overflow capitalize-first op-5"
                        to="mailto:"
                      >
                        {item.user.email}
                      </Link>
                    </div>
                  </div>
                </td>
                <td data-title="Network">{item.network}</td>
                <td data-title="Date">{item.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
