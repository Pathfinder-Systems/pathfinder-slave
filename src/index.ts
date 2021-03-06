/*
 * Copyright (c) 2020. This code created and belongs to Pathfinder render manager project.
 * Owner and project architect: Danil Andreev | danssg08@gmail.com |  https://github.com/DanilAndreev
 * File creator: Danil Andreev
 * Project: pathfinder-slave
 * File last modified: 17.10.2020, 23:39
 * All rights reserved.
 */


import * as Amqp from "amqplib";
import config from "./config";
import "./globals";
import RabbitMQ from "./core/RabbitMQ";

RabbitMQ.init(config.rabbit).then();
