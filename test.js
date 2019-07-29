{
  "id": "8e444642-0412-4ee1-b6a6-d7686d2db2d5",
  "version": "2.0",
  "name": "test",
  "url": "https://www.google.co.th/",
  "tests": [{
    "id": "4971c209-b473-415d-9fca-d2212c17647c",
    "name": "Untitled",
    "commands": [{
      "id": "d72463bd-f532-4077-ac82-c9c8f271cb60",
      "comment": "",
      "command": "open",
      "target": "https://www.google.co.th/",
      "targets": [],
      "value": ""
    }, {
      "id": "8e92dc01-e5a4-4d60-990e-fb6a7676a9c8",
      "comment": "",
      "command": "type",
      "target": "name=q",
      "targets": [],
      "value": "ชุดธนาคาร"
    }, {
      "id": "bc2651c8-91c5-4635-8807-7eb174dd20f0",
      "comment": "",
      "command": "//type",
      "target": "",
      "targets": [],
      "value": ""
    }]
  }],
  "suites": [{
    "id": "7af65247-5a5c-42fa-8bdc-084be93cef11",
    "name": "Default Suite",
    "persistSession": false,
    "parallel": false,
    "timeout": 300,
    "tests": ["4971c209-b473-415d-9fca-d2212c17647c"]
  }],
  "urls": ["https://www.google.co.th/"],
  "plugins": []
}