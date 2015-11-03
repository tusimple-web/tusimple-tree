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