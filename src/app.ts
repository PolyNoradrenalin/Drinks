import "reflect-metadata";
import { OrderController } from "./controller/OrderController";
import { TypeORMService } from "./service/TypeORMService";
import { ConsoleView } from "./view/view";

let type_orm_service = new TypeORMService();
let view = new ConsoleView();
let order_controller = new OrderController(type_orm_service, view);

main();

async function main() {
    while (true) {
        order_controller.previewScreen();
        try {
            await order_controller.startOrder();
        } catch (err) {
            console.log(err);
        }
    }
}