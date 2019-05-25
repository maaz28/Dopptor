import React from 'react'
import AudienceData from '../../data/audience.json'

export default function AudienceTable() {
  return (
    <div>
      <div className="table-responsive">
        <table className="table">
          <tbody>
            {
              AudienceData.countries.map((item, i) => (
                <tr key={i}>
                  <td data-title="">
                    <img src={require("../../img/svg/flags/" + item.code + ".svg")} className="icon-md" alt="" />
                  </td>
                  <td data-title="Country">
                    {item.name}
                  </td>
                  <td data-title="Audience">
                    <small className="task d-flex w-100 justify-content-between">
                      {/* {{ numberFormat value }} */}
                      {item.value}
                      <span className={"bold text-" + item.bg}>
                        {item.percentage} %
                      </span>
                    </small>
                    <div className="progress progress-xs">
                      <div className={"progress-bar bg-" + item.bg} style={{ width: item.percentage + "%" }}></div>
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
