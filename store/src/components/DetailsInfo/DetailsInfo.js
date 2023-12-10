import React from "react";
import "./DetailsInfo.css";
import BuyButton from "../BuyButton/BuyButton";
import Cep from "../CEP/Cep";

const DetailsInfo = ({ product }) => {
  const installmentValue = (product.price / 10).toFixed(2);
  return (
    <div className="info">
      <h1 className="product-name">{product.name}</h1>
      <h2 className="product-price">R$ {product.price.toFixed(2)}</h2>
      <p className="product-installment">
        em até 10x de {installmentValue} sem juros
      </p>
      <div className="bottom-info">
        <div className="button-div">
          <BuyButton />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="400"
          height="66"
          fill="none"
          viewBox="0 0 400 66"
        >
          <rect
            width="399"
            height="65"
            x=".5"
            y=".5"
            stroke="#D9D9D9"
            rx="9.5"
          />
          <path
            fill="#408080"
            d="M106.137 32.6c0-1.648.36-3.12 1.08-4.416.72-1.312 1.704-2.328 2.952-3.048 1.248-.736 2.64-1.104 4.176-1.104 1.872 0 3.472.448 4.8 1.344 1.344.88 2.32 2.128 2.928 3.744h-1.968c-.48-1.136-1.216-2.024-2.208-2.664-.976-.64-2.16-.96-3.552-.96-1.232 0-2.344.288-3.336.864-.976.576-1.744 1.408-2.304 2.496-.56 1.072-.84 2.32-.84 3.744 0 1.424.28 2.672.84 3.744.56 1.072 1.328 1.896 2.304 2.472.992.576 2.104.864 3.336.864 1.392 0 2.576-.312 3.552-.936.992-.64 1.728-1.52 2.208-2.64h1.968c-.608 1.6-1.584 2.84-2.928 3.72-1.344.88-2.944 1.32-4.8 1.32-1.536 0-2.928-.36-4.176-1.08a7.95 7.95 0 0 1-2.952-3.048c-.72-1.296-1.08-2.768-1.08-4.416Zm25.02 8.592c-1.232 0-2.344-.272-3.336-.816a6.202 6.202 0 0 1-2.328-2.352c-.56-1.024-.84-2.216-.84-3.576 0-1.36.288-2.544.864-3.552.576-1.024 1.36-1.808 2.352-2.352.992-.56 2.104-.84 3.336-.84 1.232 0 2.344.28 3.336.84a5.743 5.743 0 0 1 2.352 2.352c.576 1.008.864 2.192.864 3.552 0 1.344-.288 2.528-.864 3.552a6.059 6.059 0 0 1-2.376 2.376c-1.008.544-2.128.816-3.36.816Zm0-1.464a5.11 5.11 0 0 0 2.4-.576c.736-.4 1.328-.992 1.776-1.776.464-.8.696-1.776.696-2.928s-.224-2.12-.672-2.904c-.448-.8-1.04-1.392-1.776-1.776-.736-.4-1.536-.6-2.4-.6-.864 0-1.664.2-2.4.6-.736.384-1.328.976-1.776 1.776-.432.784-.648 1.752-.648 2.904s.216 2.128.648 2.928c.448.784 1.032 1.376 1.752 1.776a5.11 5.11 0 0 0 2.4.576Zm25.262-12.072c1.536 0 2.784.488 3.744 1.464.976.96 1.464 2.36 1.464 4.2V41h-1.656v-7.488c0-1.424-.344-2.512-1.032-3.264-.688-.752-1.624-1.128-2.808-1.128-1.232 0-2.216.408-2.952 1.224-.736.816-1.104 2-1.104 3.552V41h-1.656v-7.488c0-1.424-.344-2.512-1.032-3.264-.688-.752-1.632-1.128-2.832-1.128-1.232 0-2.216.408-2.952 1.224-.736.816-1.104 2-1.104 3.552V41h-1.68V27.896h1.68v2.256c.416-.816 1.008-1.432 1.776-1.848.768-.432 1.624-.648 2.568-.648 1.136 0 2.128.272 2.976.816.864.544 1.488 1.344 1.872 2.4.352-1.04.952-1.832 1.8-2.376.864-.56 1.84-.84 2.928-.84Zm10.595 3.12c.416-.88 1.072-1.608 1.968-2.184.912-.592 1.992-.888 3.24-.888 1.184 0 2.248.28 3.192.84.96.544 1.704 1.328 2.232 2.352.544 1.008.816 2.184.816 3.528 0 1.344-.272 2.528-.816 3.552-.528 1.024-1.272 1.816-2.232 2.376-.944.56-2.008.84-3.192.84-1.232 0-2.304-.288-3.216-.864-.912-.592-1.576-1.328-1.992-2.208v9.072h-1.656V27.896h1.656v2.88Zm9.744 3.648c0-1.088-.216-2.024-.648-2.808-.416-.8-.992-1.408-1.728-1.824-.736-.416-1.568-.624-2.496-.624-.896 0-1.72.216-2.472.648-.736.432-1.32 1.048-1.752 1.848-.432.8-.648 1.728-.648 2.784 0 1.056.216 1.984.648 2.784.432.8 1.016 1.416 1.752 1.848a4.876 4.876 0 0 0 2.472.648c.928 0 1.76-.208 2.496-.624.736-.432 1.312-1.048 1.728-1.848.432-.816.648-1.76.648-2.832Zm6.476-4.2a4.124 4.124 0 0 1 1.68-1.896c.768-.448 1.704-.672 2.808-.672v1.752h-.456c-1.216 0-2.192.328-2.928.984-.736.656-1.104 1.752-1.104 3.288V41h-1.68V27.896h1.68v2.328Zm6.247 4.2c0-1.344.264-2.52.792-3.528.544-1.024 1.288-1.808 2.232-2.352.96-.56 2.04-.84 3.24-.84 1.248 0 2.32.288 3.216.864.912.576 1.568 1.312 1.968 2.208v-2.88h1.68V41h-1.68v-2.904c-.416.896-1.08 1.64-1.992 2.232-.896.576-1.968.864-3.216.864-1.184 0-2.256-.28-3.216-.84-.944-.56-1.688-1.352-2.232-2.376-.528-1.024-.792-2.208-.792-3.552Zm11.448.024c0-1.056-.216-1.984-.648-2.784a4.599 4.599 0 0 0-1.776-1.848 4.747 4.747 0 0 0-2.448-.648c-.928 0-1.76.208-2.496.624-.736.416-1.32 1.024-1.752 1.824-.416.784-.624 1.72-.624 2.808 0 1.072.208 2.016.624 2.832.432.8 1.016 1.416 1.752 1.848.736.416 1.568.624 2.496.624.896 0 1.712-.216 2.448-.648a4.599 4.599 0 0 0 1.776-1.848c.432-.8.648-1.728.648-2.784Zm16.613 6.744c-1.504 0-2.736-.344-3.696-1.032-.944-.704-1.472-1.656-1.584-2.856h1.728c.08.736.424 1.336 1.032 1.8.624.448 1.456.672 2.496.672.912 0 1.624-.216 2.136-.648.528-.432.792-.968.792-1.608 0-.448-.144-.816-.432-1.104a2.923 2.923 0 0 0-1.104-.672c-.432-.176-1.024-.36-1.776-.552-.976-.256-1.768-.512-2.376-.768a4.207 4.207 0 0 1-1.56-1.128c-.416-.512-.624-1.192-.624-2.04 0-.64.192-1.232.576-1.776.384-.544.928-.976 1.632-1.296.704-.32 1.504-.48 2.4-.48 1.408 0 2.544.36 3.408 1.08.864.704 1.328 1.68 1.392 2.928h-1.68c-.048-.768-.352-1.384-.912-1.848-.544-.48-1.296-.72-2.256-.72-.848 0-1.536.2-2.064.6-.528.4-.792.896-.792 1.488 0 .512.152.936.456 1.272.32.32.712.576 1.176.768.464.176 1.088.376 1.872.6.944.256 1.696.504 2.256.744.56.24 1.04.592 1.44 1.056.4.464.608 1.08.624 1.848 0 .704-.192 1.336-.576 1.896-.384.544-.92.976-1.608 1.296-.688.32-1.48.48-2.376.48Zm19.579-7.416c0 .576-.016 1.016-.048 1.32h-10.872c.048.992.288 1.84.72 2.544s1 1.24 1.704 1.608a5.08 5.08 0 0 0 2.304.528c1.088 0 2-.264 2.736-.792a3.701 3.701 0 0 0 1.488-2.136h1.776c-.32 1.28-1.008 2.328-2.064 3.144-1.04.8-2.352 1.2-3.936 1.2-1.232 0-2.336-.272-3.312-.816a6.031 6.031 0 0 1-2.304-2.352c-.544-1.024-.816-2.216-.816-3.576 0-1.36.272-2.552.816-3.576.544-1.024 1.304-1.808 2.28-2.352.976-.544 2.088-.816 3.336-.816 1.248 0 2.336.272 3.264.816a5.511 5.511 0 0 1 2.16 2.208c.512.912.768 1.928.768 3.048Zm-1.704-.048c.016-.976-.184-1.808-.6-2.496a3.893 3.893 0 0 0-1.656-1.56 5.08 5.08 0 0 0-2.304-.528c-1.248 0-2.312.4-3.192 1.2-.88.8-1.368 1.928-1.464 3.384h9.216Zm10.273-6.024c1.232 0 2.304.288 3.216.864.912.576 1.568 1.304 1.968 2.184v-2.856h1.68v13.44c0 1.2-.264 2.264-.792 3.192a5.242 5.242 0 0 1-2.16 2.136c-.928.512-1.984.768-3.168.768-1.68 0-3.08-.4-4.2-1.2-1.104-.8-1.792-1.888-2.064-3.264h1.656c.288.912.832 1.64 1.632 2.184.816.544 1.808.816 2.976.816.848 0 1.608-.184 2.28-.552.672-.352 1.2-.88 1.584-1.584.384-.704.576-1.536.576-2.496v-3.24c-.416.896-1.08 1.64-1.992 2.232-.896.576-1.96.864-3.192.864-1.2 0-2.28-.28-3.24-.84-.944-.56-1.688-1.352-2.232-2.376-.528-1.024-.792-2.208-.792-3.552 0-1.344.264-2.52.792-3.528.544-1.024 1.288-1.808 2.232-2.352.96-.56 2.04-.84 3.24-.84Zm5.184 6.744c0-1.056-.216-1.984-.648-2.784a4.599 4.599 0 0 0-1.776-1.848 4.747 4.747 0 0 0-2.448-.648c-.928 0-1.76.208-2.496.624-.736.416-1.32 1.024-1.752 1.824-.416.784-.624 1.72-.624 2.808 0 1.072.208 2.016.624 2.832.432.8 1.016 1.416 1.752 1.848.736.416 1.568.624 2.496.624.896 0 1.712-.216 2.448-.648a4.599 4.599 0 0 0 1.776-1.848c.432-.8.648-1.728.648-2.784Zm16.868-6.552V41h-1.68v-2.304a4.027 4.027 0 0 1-1.776 1.872c-.8.432-1.696.648-2.688.648-1.568 0-2.848-.48-3.84-1.44-.992-.976-1.488-2.384-1.488-4.224v-7.656h1.656v7.464c0 1.424.352 2.512 1.056 3.264.72.752 1.696 1.128 2.928 1.128 1.264 0 2.272-.4 3.024-1.2.752-.8 1.128-1.976 1.128-3.528v-7.128h1.68Zm5.515 2.328a4.124 4.124 0 0 1 1.68-1.896c.768-.448 1.704-.672 2.808-.672v1.752h-.456c-1.216 0-2.192.328-2.928.984-.736.656-1.104 1.752-1.104 3.288V41h-1.68V27.896h1.68v2.328Zm6.248 4.2c0-1.344.264-2.52.792-3.528.544-1.024 1.288-1.808 2.232-2.352.96-.56 2.04-.84 3.24-.84 1.248 0 2.32.288 3.216.864.912.576 1.568 1.312 1.968 2.208v-2.88h1.68V41h-1.68v-2.904c-.416.896-1.08 1.64-1.992 2.232-.896.576-1.968.864-3.216.864-1.184 0-2.256-.28-3.216-.84-.944-.56-1.688-1.352-2.232-2.376-.528-1.024-.792-2.208-.792-3.552Zm11.448.024c0-1.056-.216-1.984-.648-2.784a4.599 4.599 0 0 0-1.776-1.848 4.747 4.747 0 0 0-2.448-.648c-.928 0-1.76.208-2.496.624-.736.416-1.32 1.024-1.752 1.824-.416.784-.624 1.72-.624 2.808 0 1.072.208 2.016.624 2.832.432.8 1.016 1.416 1.752 1.848.736.416 1.568.624 2.496.624.896 0 1.712-.216 2.448-.648a4.599 4.599 0 0 0 1.776-1.848c.432-.8.648-1.728.648-2.784Z"
            opacity=".81"
          />
          <path
            stroke="#408080"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M78.208 33h3.376c.8 0 1.447.638 1.447 1.425v16.15c0 .787-.648 1.425-1.447 1.425H55.538a1.436 1.436 0 0 1-1.447-1.425v-16.15c0-.787.648-1.425 1.447-1.425h3.377m19.293 0v-9.5c0-3.167-1.93-9.5-9.647-9.5-7.717 0-9.646 6.333-9.646 9.5V33m19.293 0H58.915"
            opacity=".81"
          />
        </svg>
        <Cep />
      </div>
    </div>
  );
};

export default DetailsInfo;
