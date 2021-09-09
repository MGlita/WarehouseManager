using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Warehouse_management.Entities;
using Warehouse_management.Interfaces;

namespace Warehouse_management.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private IOrderRepository _repository;

        public OrderController(IOrderRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public List<Order> Get()
        {
            var x = _repository.GetActiveOrders();
            return x;
        }

        [HttpPost]
        public void Post([FromBody] Order order)
        {
            _repository.AddOrder(order);
        }

        [Route("Cancel/{orderId}")]
        [HttpPut]
        public void CancelOrder([FromBody]int orderId)
        {
            _repository.CancelOrder(orderId);
        }

        [Route("Accept/{orderId}")]
        [HttpPut]
        public void AcceptOrder([FromBody]int orderId)
        {
            _repository.AcceptOrder(orderId);
        }
    }
}