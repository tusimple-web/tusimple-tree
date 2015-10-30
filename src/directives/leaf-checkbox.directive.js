tusimple.directive('leafCheckbox', function () {

    function isLeaf(node) {
        var nodes = node.nodes;
        if (!nodes || !nodes.length) {
            return true;
        }
        return false;
    }

    return function (scope, element, attrs) {
        if (!isLeaf(scope.node)) {
            element.css("display", "none");
        }
    };
});

