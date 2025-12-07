$(document).ready(function () {
    // DataTable standard avec scrollX pour afficher toutes les colonnes
    $("#datatable").DataTable({
        scrollX: true,
        scrollCollapse: true,
        responsive: false,
        autoWidth: false
    });

    // DataTable avec boutons
    $("#datatable-buttons").DataTable({
        lengthChange: false,
        scrollX: true,
        scrollCollapse: true,
        responsive: false,
        autoWidth: false,
        buttons: ["copy", "excel", "pdf", "colvis"]
    }).buttons().container().appendTo("#datatable-buttons_wrapper .col-md-6:eq(0)");

    // Style pour les selects
    $(".dataTables_length select").addClass("form-select form-select-sm");
});