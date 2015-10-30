tusimple.directive("cascadeCheckbox", function () {

    return function (scope, element, attrs) {
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
    };
});

