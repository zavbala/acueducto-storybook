"use client";

import { KeyValue } from "@/components/KeyValue";
import Clients from "@/data/Clients.json";
import { Avatar } from "@/stories/Avatar";
import { Badge } from "@/stories/Badge";
import { Header } from "@/stories/Header";
import { Logo } from "@/stories/Logo";
import { Modal } from "@/stories/Modal";
import { Paginator } from "@/stories/Paginator";
import { Table } from "@/stories/Table";
import { useEffect, useState } from "react";

const Cols = [
  "Nombre",
  "Correo",
  "Estado",
  "No. de pedido",
  "Estatus",
  "Acciones",
];

const Statuses = ["Enviado", "Cancelado", "Pendiente"];

const StatusesVariant = {
  Enviado: "success",
  Cancelado: "error",
  Pendiente: "warning",
};

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentOrder, setCurrentOrder] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const currentOrderData = Clients.find((client) => client.id === currentOrder);

  return (
    <>
      <Header>
        <Logo />
        <Avatar size={[32, 32]} />
      </Header>

      <main className="max-w-7xl mx-auto lg:px-0 px-3">
        <Table
          cols={Cols}
          title="Clientes"
          loading={loading}
          hideInMobile={[1, 2, 4]}
          onRemove={(id) => {}}
          onView={(id) => setCurrentOrder(id)}
          // @ts-ignore
          rows={Object.values(Clients)
            .slice(currentPage * 10 - 10, currentPage * 10)
            // Remove ID
            .map((client) => Object.values(client).slice(1))
            .map((client, index) => {
              const status = client.pop();

              return [
                ...client,
                <Badge
                  label={status as string}
                  key={`badge-${status}-${index}`}
                  variant={
                    StatusesVariant[status as keyof typeof StatusesVariant]
                  }
                />,
              ];
            })}
        />

        <div className="flex w-full items-center justify-center">
          <Paginator
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            totalPages={Math.ceil(Clients.length / 10)}
            onNextPage={() => setCurrentPage(currentPage + 1)}
            onPrevPage={() => setCurrentPage(currentPage - 1)}
          />
        </div>
      </main>

      <Modal
        description=""
        confirmText="Volver"
        open={currentOrder !== null}
        title="Detalles de la orden"
        onClose={() => setCurrentOrder(null)}
      >
        <div className="bg-[#3A424E] flex lg:flex-row flex-col gap-5 justify-between p-[20px] rounded-[8px]">
          <div className="grid lg:grid-cols-2 gap-2">
            <KeyValue
              label="Cliente"
              content={currentOrderData?.name as string}
            />
            <KeyValue
              label="Correo"
              content={currentOrderData?.email as string}
            />

            <KeyValue
              label="No. de orden"
              content={currentOrderData?.order_number as string}
            />

            <KeyValue
              label="Estado"
              content={currentOrderData?.status as string}
            />
          </div>

          <div>
            <h2 className="font-bold"> Costo </h2>

            <ul className="flex flex-col space-y-1">
              <li> Productos: $25,850.00 </li>
              <li> Envio: $1,000.00 </li>
              <li> Total: $26,850.00 </li>
            </ul>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Home;
