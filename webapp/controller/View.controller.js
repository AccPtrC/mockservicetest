sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("odatamockservice.controller.View", {
            onInit: function () {

            },
            
            onPress: function() {
                var oList = this.byId("list");
                oList.bindItems({
                    path: "/Meetups",
                    parameters: {
                        custom: {
                            first: "3"
                        }
                    },
                    template: new ObjectListItem({
                        title: "{Title}",
                        number: {
                            path: 'EventDate',
                            type: 'sap.ui.model.type.DateTime',
                            formatOptions: {
                                style: 'medium'
                            }
                        },
                        attributes: [
                            new ObjectAttribute({
                                text: "{Description}"
                            })
                        ]
                    })
                });
            }
        });
    });
