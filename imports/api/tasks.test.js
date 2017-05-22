/* eslint-env mocha */

import {Meteor} from 'meteor/meteor';
import { Random } from 'meteor/random';
import { Tasks } from './tasks.js';
import { assert } from 'meteor/practicalmeteor:chai'

if(Meteor.isServer) {
    describe('Tasks', () => {
        describe('methods', () => {
            const userId = Random.id();
            let taskId;

            beforeEach(() => {
                Tasks.remove({});
                taskId = Tasks.insert({
                    text: 'test task',
                    createdAt: new Date(),
                    owner: userId,
                    username: 'tmeasday',        
                });
            });

            it('can be delete owned task', () => {
                const deleteTask = Meteor.server.method_handlers['tasks.remove'];
                const invocation = { userId };
                deleteTask.apply(invocation, [taskId]);
                assert.equal(Tasks.find().count(), 0);
            });
        });
    });
}