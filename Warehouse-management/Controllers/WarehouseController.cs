using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Warehouse_management.Entities;
using Warehouse_management.Interfaces;

namespace Warehouse_management.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WarehouseController : ControllerBase
    {
        private IWarehouseRepository _repository;
        public WarehouseController(IWarehouseRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public List<Warehouse> Get()
        {
            return _repository.GetWarehouse();
        }

        // POST: api/Warehouse
        [HttpPost]
        public void Post([FromBody] Warehouse warehouse)
        {
            _repository.AddWarehouse(warehouse);
        }

        // PUT: api/Warehouse/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Warehouse warehouse)
        {
            _repository.UpdateWarehouse(warehouse);
        }
    }
}
