$(() => {
    const clearMsg = () => $("#msg").text("");
    const addedSuccess = (data) => {
        console.log(data);
        $("#msg").text("Data returned successfully");
        $("#cart-items-count").text(data);
        setTimeout(clearMsg, 1500);
    }
    const noSuccess = () => {
        $("#msg").text("Unable to reach server");
        setTimeout(clearMsg, 10000);
    }

    $("#add-to-cart").submit(() => {
        $.post({
            url: "/products/add-to-cart",
            data: { productId: $("#product-id").val() },
        }).done(addedSuccess)
            .fail(noSuccess);
        return false;
    });
});