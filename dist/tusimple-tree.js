var tusimple = angular.module('tusimpleTree',[]);

tusimple.directive('addNodeCheckbox', function() {
    return {
        link: function(scope, ele, attrs) {
            ele.bind('click',function () {
                console.log("llllll");
                scope.$apply(function () {
                     scope.node.nodes.push({
                        "id": parseInt(scope.node.id + "" + 1),
                        "title": scope.node.title+"."+(scope.node.nodes.length+1),
                        "nodes": []
                    });
                });
            });
        }
    };
});
tusimple.directive("cascadeCheckbox", function () {
    return {
        link: function (scope, element, attrs) {
            element.bind('change',function () {
                scope.$broadcast("event_cascadeCheckbox_selectAll", element.prop('checked'));
                scope.$parent.$emit("event_cascadeCheckbox_popAll");
            });

            scope.$on("event_cascadeCheckbox_selectAll", function (event, selected) {
                scope.$apply(function () {
                    scope.node.checked = selected;
                });
            });

            scope.$on("event_cascadeCheckbox_popAll", function (event) {
                var nodeLen = scope.node.nodes.length;
                var nodeChecked = 0;
                var nodeUnchecked = 0;
                for (var i = 0; i < nodeLen; i++) {
                    if (!scope.node.nodes[i].checked) {
                        nodeUnchecked++;
                    } else {
                        nodeChecked++;
                    }
                }

                if (nodeChecked == nodeLen) {//子元素都选中
                    scope.$apply(function () {
                        scope.node.checked = true;
                    });
                }else{
                    scope.$apply(function () {
                        scope.node.checked = false;
                    });
                }

            });
        }
        
    };

});


tusimple.directive('leafCheckbox', function () {

    function isLeaf(node) {
        var nodes = node.nodes;
        if (!nodes || !nodes.length) {
            return true;
        }
        return false;
    }

    return function (scope, element, attrs) {
        scope.$watch('node',function () {
            if (!isLeaf(scope.node)) {
                element.css('display','none');
            }else{
                element.css('display','inline-block');
            }
        },true);
    };
});


tusimple.directive("removeNodeCheckbox", function() {
    return {
        link: function (scope,ele,attr) {
            // for (var j = 0; j < scope.data.length; j++) {
            //     addParent ();
            // };
            // function addParent (node) {
            //     for (var i = 0; i < node.nodes.length; i++) {
            //         node.nodes[i].parent = node;
            //     };
            // }
            var parent = scope.$parent.$parent;
                if (parent.node) {
                    parent.$on('removeNode',function (event,id) {
                            for (var i = 0; i < parent.node.nodes.length; i++) {
                                if (parent.node.nodes[i].id === id) {
                                    console.log("if");
                                    parent.$apply(function () {
                                        parent.node.nodes.splice(i,1);
                                    });
                                    event.stopPropagation();
                                }
                            }
                    });
                }else{
                   parent.$on('removeNode',function (event,id) {
                        for (var j = 0; j < parent.data.length; j++) {
                            if (parent.data[j].id === id) {
                                parent.$apply(function () {
                                    parent.data.splice(j,1);
                                });
                                event.stopPropagation();
                            }
                        }
                    });
                }
            ele.bind('click',function () {
                scope.$emit('removeNode',scope.node.id);
            });
        }
    };
});
angular.module("tusimpleTree").run(["$templateCache", function($templateCache) {$templateCache.put("template-html/add-nodes.html","<div class=\"box-container\">\n    <input leaf-checkbox type=\"checkbox\" data-ng-model=\"node.checked\"> {{node.title}}\n    <span add-node-checkbox class=\"add\">+</span>\n</div>\n<ul ng-model=\"node.nodes\">\n    <li ng-repeat=\"node in node.nodes\" ng-include=\"\'template-html/add-nodes.html\'\">\n    </li>\n</ul>");
$templateCache.put("template-html/nodes-renderer.html","<div class=\"box-container\">\n    <input cascade-checkbox type=\"checkbox\" data-ng-model=\"node.checked\"> {{node.title}}\n</div>\n<ul ng-model=\"node.nodes\">\n    <li ng-repeat=\"node in node.nodes\" ng-include=\"\'template-html/nodes-renderer.html\'\">\n    </li>\n</ul>");
$templateCache.put("template-html/nodes-renderer1.html","<div class=\"box-container\">\n    <input leaf-checkbox type=\"checkbox\" data-ng-model=\"node.checked\"> {{node.title}}\n    <span remove-node-checkbox class=\"close\">×</span>\n</div>\n<ul ng-model=\"node.nodes\">\n    <li ng-repeat=\"node in node.nodes\" ng-include=\"\'template-html/nodes-renderer1.html\'\">\n    </li>\n</ul>");
$templateCache.put("template-html/nodes-renderer2.html","<div class=\"box-container\">\n    <input cascade-checkbox type=\"checkbox\" data-ng-model=\"node.checked\"> {{node.title}} \n    <span remove-node-checkbox class=\"close\">×</span>\n</div>\n<ul ng-model=\"node.nodes\">\n    <li ng-repeat=\"node in node.nodes\" ng-include=\"\'template-html/nodes-renderer2.html\'\">\n    </li>\n</ul>\n");}]);