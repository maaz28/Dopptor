import React from "react";
import FbData from "../../data/social/facebook-audience.json";

export default function FbAudience() {
  return (
    <div class="row gap-y">
      <div class="col-lg-8">
        <table class="table">
          <thead>
            <tr>
              <th class="color-2 alpha-5 bold small">Audience growth metric</th>
              <th class="color-2 alpha-5 bold small">Totals</th>
            </tr>
          </thead>
          <tbody>
            {FbData.metrics.map(item => {
              return (
                <tr>
                  <td>{item.label}</td>
                  <td>{item.value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div class="col-lg-4 text-center">
        <p class="accent bold">Number of net Likes</p>
        <p class="color-2 alpha-5">Increased by</p>
        <p class="font-lg bold">
          <i class="fas fa-angle-up" /> {FbData.likes}
        </p>
        <p class="small text-info">Since last month</p>
      </div>
    </div>
  );
}
