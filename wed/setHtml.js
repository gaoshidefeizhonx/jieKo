$(
    selectAll()
)

function selectAll() {
    $.ajax({
            type: "get",
            url: "http://localhost/selectAll",
            data: null,
            dataType: "json",
            success: (data) => {
                let tbody = $("#tbody")
                $(tbody).empty()
                let tr = ` <tr>
                           <th>${data.id}</th>
                           <th>${data.uname}</th>
                           <th>${data.age}</th>
                           <th>${data.gender}</th>
                           <th><button class="revise">修改</button></th>
                           <th><button class="delete">删除</button></th>
                           </tr>`
                $(tbody).append(tr)
            }
        }
    )
}

