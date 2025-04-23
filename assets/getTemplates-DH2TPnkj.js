const e=async()=>{try{const r=await fetch("/templates.json");if(!r.ok)throw new Error("无法获取模板列表");return await r.json()}catch(r){return console.error("获取模板列表失败:",r),[]}};export{e as g};
