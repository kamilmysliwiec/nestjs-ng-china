import {OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse} from '@nestjs/websockets';
import {Logger} from '@nestjs/common';

@WebSocketGateway()
export class UiLogsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server;

  handleConnection() {
    Logger.log('Client Connected to Socket');
  }

  handleDisconnect() {
    Logger.log('Client Disconnected to Socket');
  }

  @SubscribeMessage('events')
  onEvent(client, data: any): WsResponse<any> {
    const event = 'events';
    Logger.log('Event Received: ' + JSON.stringify(data));
    return {event, data};
  }
}
