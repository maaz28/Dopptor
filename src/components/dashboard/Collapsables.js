import React, { Component } from 'react'
import { Chart } from "react-google-charts";
import { Link } from 'react-router-dom'
import RecentSubscriber from '../templates/Recently-Subscriber'
import Twitter from '../templates/Twitter-trends'
import Youtube from '../templates/Most-Viewed-yt-videos'
import Facebook from '../templates/Fb-audience-growth'

export default class Collapsables extends Component {

  toggleCollapse = (id1,id2) =>{
    if (document.getElementById(id1).classList.contains('show')){
      document.getElementById(id1).classList.toggle('show')
      document.getElementById(id1).classList.toggle('collapse')
      document.getElementById(id1).classList.toggle('collapsing')
      // document.getElementById(id1).setAttribute('style','')
      // document.getElementById(id1).classList.toggle('collapse-show')
      setTimeout(() => {
        document.getElementById(id1).classList.toggle('collapse')
        // document.getElementById(id1).setAttribute('style','')
        document.getElementById(id1).classList.toggle('collapsing')
      }, 300)
    }
    else{
      document.getElementById(id1).classList.toggle('collapse')
      document.getElementById(id1).classList.toggle('collapsing')
      document.getElementById(id1).setAttribute('style','height:455px')
      setTimeout(() => {
        document.getElementById(id1).classList.toggle('collapsing')
        document.getElementById(id1).classList.toggle('collapse')
        document.getElementById(id1).classList.toggle('show')
        document.getElementById(id1).setAttribute('style','')
      }, 300)
    }
    // else if (document.getElementById(id1).classList.contains('collapse-show')){
    //   document.getElementById(id1).classList.toggle('collapse-show')
    //   document.getElementById(id1).classList.toggle('collapsing')
    //   setTimeout(() => {
    //     document.getElementById(id1).classList.toggle('collapse')
    //     document.getElementById(id1).classList.toggle('collapsing')
    //   }, 300)

    // }
    // document.getElementById(id1).classList.toggle('collapsing')
    // document.getElementById(id1).classList.toggle('collapse')
    // setTimeout(()=>{
    //   document.getElementById(id1).classList.toggle('collapse')
    //   document.getElementById(id1).classList.toggle('collapse-show')
    //   document.getElementById(id1).classList.toggle('collapsing')
    // },300)
    // document.getElementById(id1).classList.toggle('collapsing')
    // setTimeout(() => {
    // document.getElementById(id1).classList.toggle('show')
    // document.getElementById(id1).classList.toggle('collapsing')
    // }, 300)
    document.getElementById(id2).classList.toggle('collapsed')
    // document.getElementById(id2).classList.toggle('')

  }

  render() {
    return (
      <div className="col-lg-8">
        <div className="accordion accordion-clean accordion-collapsed" id="social-accordion">
          <div className="card">
            <div className="card-header d-flex flex-column flex-md-row">
              <a href="javascript:void(0)" className="card-title btn">Monthly subscribers</a>
              <div className="card-options ml-md-auto">
                <select id="monthly-subscribers-actions" data-style="btn-outline-accent" data-header="Pick an option">
                  <option value="tm">This month</option>
                  <option value="lm">Last month</option>
                  <option value="ty">This year</option>
                </select>
              </div>
            </div>
            <div className="card-body" id="monthly-subscribers-panel">
              <div className="loader-container">
                <Chart
                  width={'600px'}
                  height={'400px'}
                  chartType="Line"
                  loader={<div>Loading Chart</div>}
                  data={[
                    [
                      'Subscribers',
                      'facebook',
                      'youtube',
                      'twitter',
                    ],
                    [1, 37.8, 80.8, 41.8],
                    [2, 30.9, 69.5, 32.4],
                    [3, 25.4, 57, 25.7],
                    [4, 11.7, 18.8, 10.5],
                    [5, 11.9, 17.6, 10.4],
                    [6, 8.8, 13.6, 7.7],
                    [7, 7.6, 12.3, 9.6],
                    [8, 12.3, 29.2, 10.6],
                    [9, 16.9, 42.9, 14.8],
                    [10, 12.8, 30.9, 11.6],
                    [11, 5.3, 7.9, 4.7],
                    [12, 6.6, 8.4, 5.2],
                    [13, 4.8, 6.3, 3.6],
                    [14, 4.2, 6.2, 3.4],
                  ]}
                  options={{
                    chart: {
                      title: 'Subscribers from different social media',
                      // subtitle: 'in millions of dollars (USD)',
                    },
                  }}
                  rootProps={{ 'data-testid': '3' }}
                />
              </div>
              {/* <canvas id="social-subscribers"></canvas> */}
            </div>
          </div>
          <div className="card"  >
            <div className="card-header">
              <Link onClick={() => this.toggleCollapse("recently-subscribers-panel", "recentId")} id="recentId" className="card-title btn collapsed" data-toggle="collapse" data-target="#recently-subscribers-panel">Recently subscribers</Link>
            </div>
            <div id="recently-subscribers-panel"  className="collapse" data-parent="#social-accordion">
              <div className="card-body load-content">
                {/* <div className="loader-container">
                  <div className="loader-8">Loading...</div>
                </div> */}
                <RecentSubscriber />
              </div>
            </div>
          </div>
          <div className="card"  >
            <div className="card-header">
              <Link onClick={() => this.toggleCollapse("twitter-trends-panel", "twitterId")} id="twitterId" className="card-title btn collapsed" data-toggle="collapse" data-target="#twitter-trends-panel">Twitter trends</Link>
            </div>
            <div id="twitter-trends-panel" className="collapse" data-parent="#social-accordion">
              <div className="card-body load-content">
                <Twitter />
              </div>
            </div>
          </div>
          <div className="card"  >
            <div className="card-header">
              <Link onClick={() => this.toggleCollapse("most-viewed-yt-videos-panel", "youtubeId")} id="youtubeId" className="card-title btn collapsed" data-toggle="collapse" data-target="#most-viewed-yt-videos-panel">Most viewed youtube videos</Link>
            </div>
            <div id="most-viewed-yt-videos-panel" className="collapse" data-parent="#social-accordion">
              <div className="card-body load-content">
                <Youtube />
              </div>
            </div>
          </div>
          <div className="card"  >
            <div className="card-header">
              <Link onClick={() => this.toggleCollapse("fb-audience-growth-panel", "facebookId")} id="facebookId" className="card-title btn collapsed" data-toggle="collapse" data-target="#fb-audience-growth-panel">Facebook audience growth</Link>
            </div>
            <div id="fb-audience-growth-panel" className="collapse" data-parent="#social-accordion">
              <div className="card-body load-content">
                <Facebook />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
