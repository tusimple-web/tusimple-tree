'use strict';

angular
    .module('example',['tusimpleTree'])
    .controller("demoController", function($scope) {
        $scope.data = [{
            "id": 1,
            "title": "node1",
            "nodes": [{
                "id": 11,
                "title": "node1.1",
                "nodes": [{
                    "id": 111,
                    "title": "node1.1.1",
                    "nodes": []
                }]
            }, {
                "id": 12,
                "title": "node1.2",
                "nodes": []
            }]
        }, {
            "id": 2,
            "title": "node2",
            "nodes": [{
                "id": 21,
                "title": "node2.1",
                "nodes": []
            }, {
                "id": 22,
                "title": "node2.2",
                "nodes": []
            }]
        }, {
            "id": 3,
            "title": "node3",
            "nodes": [{
                "id": 31,
                "title": "node3.1",
                "nodes": []
            }]
        }];



        $scope.changeData = function() {
            $scope.data = [{
                "id": 1,
                "title": "节点1",
                "nodes": [{
                    "id": 11,
                    "title": "节点.1",
                    "nodes": [{
                        "id": 111,
                        "title": "节点.1.1",
                        "nodes": []
                    }]
                }, {
                    "id": 12,
                    "title": "节点.2",
                    "nodes": []
                }]
            }, {
                "id": 2,
                "title": "节点",
                "nodes": [{
                    "id": 21,
                    "title": "节点.1",
                    "nodes": []
                }, {
                    "id": 22,
                    "title": "节点.2",
                    "nodes": []
                }]
            }, {
                "id": 3,
                "title": "节点",
                "nodes": [{
                    "id": 31,
                    "title": "节点.1",
                    "nodes": []
                }]
            }];

        }

        $scope.changeData1 = function() {
            $scope.data = [{
                "id": 1,
                "title": "node1",
                "nodes": [{
                    "id": 11,
                    "title": "node1.1",
                    "nodes": [{
                        "id": 111,
                        "title": "node1.1.1",
                        "nodes": []
                    }]
                }, {
                    "id": 12,
                    "title": "node1.2",
                    "nodes": []
                }]
            }, {
                "id": 2,
                "title": "node2",
                "nodes": [{
                    "id": 21,
                    "title": "node2.1",
                    "nodes": []
                }, {
                    "id": 22,
                    "title": "node2.2",
                    "nodes": []
                }]
            }, {
                "id": 3,
                "title": "node3",
                "nodes": [{
                    "id": 31,
                    "title": "node3.1",
                    "nodes": []
                }]
            }];
        }
    });