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