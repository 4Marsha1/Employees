import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDetails } from '../redux/actions/fetchDetails';

import { TreeView, TreeItem } from '@mui/lab';
import { ChevronRightOutlined, ExpandMoreOutlined } from '@mui/icons-material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

const HierarchyTree = () => {
    const employees = useSelector(state => state.employeeDetailsReducer.employeeDetails);
    const dispatch = useDispatch();
    const [tree, setTree] = useState([]);

    const unflatten = (items) => {
        var tree = [], mappedArr = {}, mappedElem
        items.forEach(function (item) {
            var id = item.id;
            if (!mappedArr.hasOwnProperty(id)) {
                mappedArr[id] = item;
                mappedArr[id].children = [];
            }
        })
        items.forEach(function (item) {
            var parentId = item.manager_id;
            if (!mappedArr.hasOwnProperty(parentId)) {
                var newItem = {};
                newItem.id = parentId;
                newItem.first_name = item.first_name;
                newItem.last_name = item.last_name;
                newItem.manager_id = '';
                mappedArr[parentId] = newItem;
                mappedArr[parentId].children = [];
            }
        })
        for (var id in mappedArr) {
            if (mappedArr.hasOwnProperty(id)) {
                mappedElem = mappedArr[id];
                if (mappedElem.manager_id) {
                    var parentId = mappedElem.manager_id;
                    mappedArr[parentId].children.push(mappedElem);
                }
                else {
                    tree.push(mappedElem);
                }
            }
        }
        return tree;
    }

    useEffect(() => {
        if (employees.length === 0) {
            dispatch(fetchDetails());
        }
    }, [employees])

    useEffect(() => {
        setTree(unflatten(employees));
    }, [employees])

    const renderTree = (nodes) => {
        return <TreeItem key={nodes.id} nodeId={nodes.id.substring(3)}
            label={nodes.first_name + " " + nodes.last_name + " " + "(" + nodes.id + ")"}>
            {Array.isArray(nodes.children)
                ? nodes.children.map((node) => renderTree(node))
                : null}
        </TreeItem>
    };

    return (
        <Box sx={{
            padding: '2rem 4rem', margin: '2rem', border: '2px solid black', gap: '2rem',
            borderRadius: '4px', minHeight: '80vh', display: 'flex', flexDirection: 'column'
        }}>
            <span style={{ fontSize: '20px', fontWeight: '600', color: 'teal' }}>Employee Hierarchy</span>
            <TreeView
                aria-label="customized"
                defaultCollapseIcon={<ExpandMoreOutlined />}
                defaultExpandIcon={<ChevronRightOutlined />}
            >
                {tree.length > 0 ? renderTree(tree[0]) : null}
            </TreeView>
            <Link to='/'
                style={{
                    textDecoration: 'none', background: '#4087FF', padding: '0.4rem 1rem',
                    color: 'white', borderRadius: '4px', width: '200px'
                }}>
                Back to Employee Table
            </Link>
        </Box>
    );
}

export default HierarchyTree