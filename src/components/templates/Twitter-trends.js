import React from "react";
import TwitterData from "../../data/social/twitter-trends.json";

export default function TwitterTrends() {
  return (
    <div class="row gap-y">
      <div class="col-lg-6">
        <div class="text-center mb-5">
          <h5 class="bold text-success">Topics frequently mentioned</h5>
          <p class="my-0 color-2 alpha-5 small">
            <span class="italic">with</span>
            <span class="bold">@GenesisTemplate</span>
          </p>
        </div>

        {TwitterData.topics.map(item => {
          return (
            <>
              <div class="d-flex align-items-center">
                <div class="flex-fill">
                  <p class="bold text-success my-0">{item.title}</p>
                  <ul class="list-unstyled nav">
                    {item.tags.map(tag => {
                      return <li class="mr-2 color-2 alpha-5">{tag.label}</li>;
                    })}
                  </ul>
                </div>
                <span class="font-lg bold text-success">{item.used}</span>
              </div>

              <div class="progress progress-xs">
                <div
                  class="progress-bar bg-success"
                  style={{ width: item.percentage + "%" }}
                />
              </div>
            </>
          );
        })}
      </div>

      <div class="col-lg-6">
        <div class="text-center mb-5">
          <h5 class="bold text-info">Topics frequently mentioned</h5>
          <p class="my-0 color-2 alpha-5 small">
            <span class="italic">with</span>
            <span class="bold">@GenesisTemplate</span>
          </p>
        </div>

        {TwitterData.hashtags.map(item => {
          return (
            <>
              <div class="d-flex align-items-center">
                <div class="flex-fill">
                  <p class="bold text-info my-0">{item.title}</p>
                  <ul class="list-unstyled nav">
                    {item.tags.map(tag => {
                      return <li class="mr-2 color-2 alpha-5">{tag.label}</li>;
                    })}
                  </ul>
                </div>
                <span class="font-lg bold text-info">{item.used}</span>
              </div>

              <div class="progress progress-xs">
                <div
                  class="progress-bar bg-info"
                  style={{ width: item.percentage + "%" }}
                />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
