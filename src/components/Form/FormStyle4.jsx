import React from 'react'

export default function FormStyle4() {
  return (
    <form action="#" className="row">
      <div className="col-lg-6">
        <input
          className="form-control cs_fs_14 cs_rounded_5 border-0 cs_mb_35 bg-gray"
          type="text"
          placeholder="Your Name"
        />
      </div>
      <div className="col-lg-6">
        <input
          className="form-control cs_fs_14 cs_rounded_5 border-0 cs_mb_35 bg-gray"
          type="text"
          placeholder="Your Email"
        />
      </div>
      <div className="col-lg-12">
        <textarea
          className="form-control cs_fs_14 cs_rounded_5 border-0 cs_mb_40 bg-gray"
          placeholder="Message here ..."
          cols={35}
          rows={7}
          defaultValue={""}
        />
      </div>
      <div className="col-lg-12">
        <button className="cs_btn cs_style_1 cs_fs_16 cs_rounded_5 cs_pl_30 cs_pr_30 cs_pt_10 cs_pb_10 overflow-hidden">
          <span>Submit Comment</span>
        </button>
      </div>
    </form>
  )
}