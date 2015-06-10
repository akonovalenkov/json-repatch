# json-repatch
Repatches json object serialized with $refs, $ids and $values by Json.Net.

```javascript
var d = {
    "$id": "1",
    "Name": "Father",
    "Parent": {
        "$ref": "5"
    },
    "Children": {
        "$id": "2",
        "$values": [
            {
                "$id": "3",
                "Name": "Child A",
                "Parent": {
                    "$ref": "1"
                },
                "Children": {
                    "$id": "10",
                    "$values": [
                        {
                            "$id": "11",
                            "Name": "Child 1 of Child A",
                            "Parent": {
                                "$ref": "3"
                            },
                            "Children": null
                        },
                        {
                            "$id": "12",
                            "Name": "Child 2 of Child A",
                            "Parent": {
                                "$ref": "3"
                            },
                            "Children": null
                        }, 
                        {
                            "$ref": "1"
                        },
                        {
                            "$ref": "10"
                        }
                    ]
                }
            },
            {
                "$id": "5",
                "Name": "Child B",
                "Parent": {
                    "$ref": "1"
                },
                "Children": null
            }
        ]
    }
};

d = JSON.rePatch(d);
```
