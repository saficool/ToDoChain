// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract ToDo {
    struct Task {
        string task;
        bool isDone;
    }

    mapping(address => Task[]) private addToTasks;

    function addTask(string memory _task) external {
        addToTasks[msg.sender].push(Task({task: _task, isDone: false}));
    }

    function getTask(uint256 _taskIndex) external view returns (Task memory) {
        Task memory task = addToTasks[msg.sender][_taskIndex];
        return task;
    }

    function getAllTask() external view returns (Task[] memory) {
        return addToTasks[msg.sender];
    }

    function updateStatus(uint256 _taskIndex, bool _isDone) external {
        addToTasks[msg.sender][_taskIndex].isDone = _isDone;
    }

    function deleteTask(uint256 _taskIndex) external {
        delete addToTasks[msg.sender][_taskIndex];
    }

    function getTaskCount() external view returns (uint256) {
        return addToTasks[msg.sender].length;
    }
}
