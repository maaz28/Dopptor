import React from "react";
import YoutubeData from "../../data/social/youtube-videos.json";

export default function MostViewedVideos() {
  return (
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th class="bold small color-2 alpha-5">Video</th>
            <th class="bold small color-2 alpha-5">Uploaded on</th>
            <th class="bold small color-2 alpha-5">Views</th>
            <th class="bold small color-2 alpha-5">Likes</th>
          </tr>
        </thead>
        <tbody>
          {YoutubeData.map(item => {
            return (
              <tr>
                <td data-title="Video">{item.title}</td>
                <td data-title="Uploaded on">{item.date}</td>
                <td data-title="Views">
                  {item.views}
                  <div class="progress progress-xs">
                    <div
                      class="progress-bar bg-danger"
                      style={{ width: item.percentage + "%" }}
                    />
                  </div>
                </td>
                <td data-title="Likes">{item.likes}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
