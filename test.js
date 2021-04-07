const array = [
    {
      "depth": {
        "typeID": 1,
        "translation": {
          "name": "range_param-common-depth",
          "values": {}
        },
        "autoMapTranslation": true,
        "defaultValue": null,
        "nullable": false,
        "editable": "RW",
        "values": []
      }
    },
    {
      "width": {
        "typeID": 1,
        "translation": {
          "name": "range_param-common-width",
          "values": {}
        },
        "autoMapTranslation": true,
        "defaultValue": null,
        "nullable": false,
        "editable": "RW",
        "values": []
      }
    }];


    // console.log(array.map((item, idx) => { return {[idx]: item}; }));

    // let x = { ...array };
    // console.log(Object.keys(x));

    // console.log(array.map((item, idx ) => item[idx]));

    // let res = array.map((item, idx ) => {
    //     let key =  Object.keys(item)[0];
    //     let value = Object.values(item)[0];
    //     console.log(key, value);
    //     return [key[0], value[0]];
    // })
    // console.log(Object.fromEntries(res))

    let res = array.map((item, idx ) => [Object.keys(item)[0], Object.values(item)[0]])

    console.log(res)
    // console.log(Object.fromEntries(res))