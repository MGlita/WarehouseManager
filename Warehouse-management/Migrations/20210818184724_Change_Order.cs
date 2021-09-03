using Microsoft.EntityFrameworkCore.Migrations;

namespace Warehouse_management.Migrations
{
    public partial class Change_Order : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ItemOrder");

            migrationBuilder.DropColumn(
                name: "ItemId",
                table: "Order");

            migrationBuilder.CreateTable(
                name: "OrderWarehouse",
                columns: table => new
                {
                    OrdersOrderId = table.Column<int>(type: "int", nullable: false),
                    WarehouseItemId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderWarehouse", x => new { x.OrdersOrderId, x.WarehouseItemId });
                    table.ForeignKey(
                        name: "FK_OrderWarehouse_Order_OrdersOrderId",
                        column: x => x.OrdersOrderId,
                        principalTable: "Order",
                        principalColumn: "OrderId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_OrderWarehouse_Warehouse_WarehouseItemId",
                        column: x => x.WarehouseItemId,
                        principalTable: "Warehouse",
                        principalColumn: "ItemId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_OrderWarehouse_WarehouseItemId",
                table: "OrderWarehouse",
                column: "WarehouseItemId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "OrderWarehouse");

            migrationBuilder.AddColumn<int>(
                name: "ItemId",
                table: "Order",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "ItemOrder",
                columns: table => new
                {
                    ItemsItemId = table.Column<int>(type: "int", nullable: false),
                    OrdersOrderId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ItemOrder", x => new { x.ItemsItemId, x.OrdersOrderId });
                    table.ForeignKey(
                        name: "FK_ItemOrder_Item_ItemsItemId",
                        column: x => x.ItemsItemId,
                        principalTable: "Item",
                        principalColumn: "ItemId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ItemOrder_Order_OrdersOrderId",
                        column: x => x.OrdersOrderId,
                        principalTable: "Order",
                        principalColumn: "OrderId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ItemOrder_OrdersOrderId",
                table: "ItemOrder",
                column: "OrdersOrderId");
        }
    }
}
